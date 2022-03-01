import React , {Component}from 'react';
import axios from "axios/index";
import Message from "./Message";

class Chatbot extends Component{

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        //this.setState({ messages: [...this.state.messages, says]});
    };

    async df_text_query(queryText){

        let says = {
            speaks : "user",
            msg : {
                text :{
                    text:queryText
                }

            }
        }
        //this method is used to set the state  of the message
        this.setState({messages:[...this.state.messages, says]})
        const res = await axios.post(' http://localhost:5000/api/df_text_query', {text:queryText});

        for (let msg of res.data.fulfillmentMessages){
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };

    async df_event_query(eventName){

        const res = await axios.post('http://localhost:5000/api/df_text_query', {event:eventName});

        for(let msg of res.data.fulfillmentMessages){
            console.log(res);
            console.log(res.data.fulfillmentMessages);
            let says = {
                speaks:'bot',
                msg:msg
            }
            this.setState({messages: [...this.state.messages, says]});
        }


    }

    componentDidMount() {
        console.log('inside component did mount');
        try{
            this.df_event_query('Welcome').then(()=>
                console.log("Connection Success")
            );
        }

        catch (err){
           console.log(err);
        }

    }
     renderMessages(returnedMessages) {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                    return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
                }
            )
        } else {
            return null;
        }
    }
    render() {
        return (
            // <div className="Chatbot" style={{height: 560 , width: 400, float: 'right'}}>
            //     <iframe
            //         allow="microphone;"
            //         width="350"
            //         height="100%"
            //         src="https://console.dialogflow.com/api-client/demo/embedded/6695ec32-5d84-4865-8704-14561a50aad2">
            //     </iframe>
            // </div>
                <div id="chatbot" style={{height: '100%', width: '100%', overflow: 'auto'}}>
                    <h2>Chatbot</h2>
                    {this.renderMessages(this.state.messages)}
                    <input type="text"/>
                </div>

        );
    }

}
export default Chatbot;


