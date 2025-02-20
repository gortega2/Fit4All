import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../classes/api";
import GuideItem from "../../componets/GuideItem/GuideItem";


export default function ViewGuidePage(){

    const [guide, setGuide] = useState("");
    const { id } = useParams();

    async function getGuide(){
        try{
            const data = await API.getSingleGuide(id)
            console.log(data);
            setGuide(data);
        } catch (error) {
            console.error(`Error fetching guide ${id}: ${error}`)
        }
    }

    useEffect(() => {
        getGuide();
    } ,[id])

    console.log(guide)

    return (<main>
       {guide && (<GuideItem key={guide.id} guide={guide} style={'full'}/>)} 
        
    </main>)
}