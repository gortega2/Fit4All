import './GuideItem.scss';
import { Link } from 'react-router-dom';
 const mockPfp = 'http://127.0.0.1:8000/static/images/default-pfp.jpg'
 const mockRating = '100%'


export default function GuideItem({guide}){
    return (
        <Link to={`guides/${guide.id}`} className='guide-item'>
            <div className='guide-item__top-ctr'>
                <img className='guide-item__pfp'src={mockPfp} />
                <div className='guide-item__text-ctr'>
                    <h2 className='heading-text'>{guide.title}</h2>
                    <p>{guide.author}</p>
                </div>
                <p>{mockRating}</p>
            </div>
            <div className='guide-item__tags-ctr'>
                {guide.guide_tag.map((tag) => {
                    return (<p key={tag} className='tags'>{tag}</p>)
                })}
                
            </div>
        </Link>
    )
}