import './GuideItem.scss';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
 const mockPfp = 'http://127.0.0.1:8000/static/images/default-pfp.jpg'

export default function GuideItem({guide}){
    return (
        <Link to={`guides/${guide.id}`} className='guide-item'>
            <div className='guide-item__top-ctr'>
                <img className='guide-item__pfp'src={mockPfp} />
                <div className='guide-item__text-ctr'>
                    <h2 className='heading-text'>{guide.title}</h2>
                    <p>{guide.author_username}</p>
                </div>
                {/* <p>{guide.rating}</p> */}
                <Rating initialValue={guide.rating} readonly={true}/>
            </div>
            <div className='guide-item__tags-ctr'>
                {guide.guide_tag.map((tag) => {
                    return (<p key={tag} className='tags'>{tag}</p>)
                })}
                
            </div>
        </Link>
    )
}