import React from 'react';
import '../styles/_cards.scss';
const InfoCard = ({page}) =>{

    return(
        <div className='card-body'>
            <div className='card'>
                <div class="card-header">
                    <span>{page.title}</span>
                    {/* <button class="copy-button"><i class="fas fa-copy"></i> Copy code</button> */}
                </div>
                <pre>
                    <code>
                    <p>{page.content.substring(0, 200)}...</p>
                    <a href={page.url} target="_blank" rel="noopener noreferrer">
                       {page.url}
                   </a>
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default InfoCard
