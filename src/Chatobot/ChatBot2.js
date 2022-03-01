import React, {useEffect, useState} from 'react'
import Message from "./Message";
import axios from "axios";
import Chatbot from "./Chatbot";



const Chatbot2 = ()=>{

    const [messages, setMessages] = useState({});
    const [messageToDisaplay,setmessageToDisaplay] = useState({});

    useEffect(() => {
        df_event_query("welcome").then(r => console.log("event query succeded"));
    },[]);

    const df_text_query= async(queryText)=>{
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
            //setMessages({ messages: [...this.state.messages, says]});
            //setMessages({ messages: [...this.state.messages, says]});
        }
    };

    const df_event_query= async (eventName)=>{

        const eventQueryVariables = {
            Event
        }
        try{
            const res = await axios.post('http://localhost:5000/api/df_event_query', {event:eventQueryVariables});
            const content = res.data.fulfillmentMessages[0];
            let says = {
                speaks:'bot',
                msg:content
            }
            console.log("says");
            console.log(says);
        }
        catch (error){
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }
            console.log("error");
        }


        //
        // setMessages(says)
        // for(let msg of res.data.fulfillmentMessages[0].text.text){
        //
        //     let says = {
        //         speaks:'bot',
        //         msg:msg
        //     }
        //     //newMessages.push(says);
        //     //setMessages(msg);
        //
        // }
        // console.log(typeof  res.data.fulfillmentMessages[0].text.text[0]);
         //This is what causing the problem


    }

    const renderMessages=(returnedMessages) =>{
        if (returnedMessages) {
            return <Message speaks={returnedMessages.speaks} text={returnedMessages.msg}/>;
        } else {
            return null;
        }
    }

    return(
            <div id="chatbot" style={{height: '100%', width: '100%', overflow: 'auto'}}>
                <h2>Chatbot</h2>
                {renderMessages(messageToDisaplay)}
                <input type="text"/>
            </div>

        );
}

export default Chatbot2;
