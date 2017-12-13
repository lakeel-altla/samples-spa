import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export const Timeline = ({ gifs, fetchGifs }) => (
    <div style={{ width: "400px", height: "200px", margin: "auto" }}>
        <TextField id='serach-text-field' hintText='Gif Keyword' fullWidth={true} onKeyDown={(e) => {
            if (e.key == 'Enter') {
                fetchGifs(e.target.value);
            }
        }} />

        {
            gifs.map((gif) => {
                return <Card style={{ margin: "50px" }} key={gif.id}>
                    <CardMedia>
                        <img src={gif.images.fixed_height.url} alt="" />
                    </CardMedia>
                    <CardTitle title={gif.slug} />
                </Card>
            })
        }
    </div>
)

Timeline.propTypes = {
    gifs: PropTypes.array.isRequired,
    fetchGifs: PropTypes.func.isRequired
}

export default Timeline