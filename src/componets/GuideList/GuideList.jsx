import './GuideList.scss';
import { useEffect, useState } from 'react';
import API from '../../classes/api';
import GuideItem from '../GuideItem/GuideItem';


export default function GuideList(){
    const [guides,setGuides] = useState([]);

    async function getGuideList(){
        const data = await API.getGuides();
        setGuides(data);
        
    }

    useEffect(() => {
        getGuideList();
    }, [])

    console.log(guides)
    return (<main>
        <section className='guide-list'>
            <div className='guide-list__header-ctr'>
                {/* TODO: MAKE THESE BUTTONS CHANGE THE SORTING OF THE GUIDES */}
                <p className='guide-list__header-button'>Top Guides</p>
                <p className='guide-list__header-button'>Trending Guides</p>
                <p className='guide-list__header-button'>Recent Guides</p>
            </div>
            <div className='guide-list__guide-ctr'>
                {guides.map( (guide) => {
                    return (<GuideItem guide={guide}/>)
                })}
            </div>

        </section>
    </main>) 
}