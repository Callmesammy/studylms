"use client"
import { Button } from "@/components/ui/button";
import { vapi } from "@/vapi";
import { useEffect, useState } from "react";
import { FaRepeat } from "react-icons/fa6";

enum callBack{
    ACTIVE,
    INVALID, 
    LOADING
}
const LaunchCourse = ({id}: {id?: any}) => {
    const [callingBack, setCallingBack] = useState<callBack>(callBack.INVALID)

    const [isSpeaking, setIsSpeaking] = useState(false)

    useEffect(() => {
        const active = () => setCallingBack(callBack.ACTIVE);
        const invalid = () => setCallingBack(callBack.INVALID);
        const message = () => {};
        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechStop = () => setIsSpeaking(false);
      
        vapi.on("call-start", active);
        vapi.on("call-end", invalid);
        vapi.on("message", message);
        vapi.on("speech-start", onSpeechStart);
        vapi.on("speech-end", onSpeechStop);
      
        return () => {
          vapi.off("call-start", active);
          vapi.off("call-end", invalid);
          vapi.off("message", message);
          vapi.off("speech-start", onSpeechStart);
          vapi.off("speech-end", onSpeechStop);
        };
      }, []);


    const handleClickOF= async()=>{
        setCallingBack(callBack.ACTIVE)
    
        vapi.stop()
    }
    const handleClickON = async () => {
        setCallingBack(callBack.LOADING);
      
        const res = await fetch("https://api.vapi.ai/v1/assistants", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${id.course}`, // This should be your real Vapi API key
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "SupportBot",
            voice: "nova",
            firstMessage: `Welcome back! Let's start the session on "${id.topic}" right now.`,
            model: {
              provider: "openai",
              model: "gpt-4",
              messages: [
                {
                  role: "system",
                  content: `
                    You are a real-time voice tutor for a course session.
      
                    Course: ${id.course}
                    Topic: ${id.topic}
                    Time: ${id.time}
      
                    Rules:
                    - Be clear, direct, and focused.
                    - Start the lesson immediately, no need to ask “How can I help?”
                    - Teach as if you're running a live class.
                    - No special characters in output.
                    - Ask short check-in questions like “Are you with me?” often.
                  `,
                },
              ],
            },
            transcriber: {
              provider: "deepgram",
              model: "nova-3",
              language: "en",
            },
          }),
        });
      
        const data = await res.json();
        const assistantId = data.id;
      
        vapi.start({ assistantId });
      };
      



    return (  
        <div className="w-full flex flex-col space-y-3">
             <div className="grid grid-cols-2 w-full gap-4 pt-4 ">
            <span className="border w-full p-3 h-22 rounded-md border-black">
            {id.topic}
          </span>
            <span className="border w-full border-black p-3 flex justify-center h-22 rounded-md items-center bg-white">
            <FaRepeat className="size-10"/>
            </span>
          </div>
          <Button onClick={callingBack===callBack.ACTIVE? handleClickON : handleClickOF }  className={`bg-red-600 cursor-pointer border-black border`}>{callingBack ===callBack.ACTIVE ? "End Session": callingBack=== callBack.LOADING? "Loading": "Start Session"}</Button> 
        </div>
    );
}
 
export default LaunchCourse;