import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <React.Fragment>
            
            <h3 className="animate__animated animate__fadeIn">
                { category }
            </h3>
            
            { 
                loading && 
                <p className="animate__animated animate__flash">Loading</p> 
            }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } // img={ img }
                        />
                    ))
                }
            </div>

        </React.Fragment>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}