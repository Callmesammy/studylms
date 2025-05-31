import { icons } from "lucide-react"

export const courses =[
    {
    id: 1,
    course: "Science", 
    name: "Neura the Brainy Explorer", 
    topic: "Neural Network of the Brain", 
    time: 45, 
    duration: "mins durations",
    bookmark: ()=> {}, 
    lunch: ()=> {}, 
    colour: "bg-purple-300"
},

{
    id: 2,
    course: "Maths", 
    name: "Countsy the Number Wizard", 
    topic: "Derivatives & Integrals", 
    time: 30, 
    duration: "mins durations",
    bookmark: ()=> {}, 
    lunch: ()=> {}, 
    colour: "bg-yellow-300"
},

{
    id: 3,
    course: "Language", 
    name: "Verba the Vocabulary Builder", 
    topic: "English Literature", 
    time: 35, 
    duration: "mins durations",
    bookmark: ()=> {}, 
    lunch: ()=> {}, 
    colour: "bg-sky-300"
},


]

in


interface ZMprops{
    id?: number,
    course?: string,
    learn?: string,
    topic?: string, 
    mins?: number,
    duration?: string,
    bookmark?: ()=> {}, 
    lunch?: ()=> {}, 
    colour?: string
}