import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle, Title } from "@mui/icons-material"

import {Videos} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail]= useState(null);
  const [Videos,setVideos] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));


},[id]);

// if(!VideoDetail?.snippet) return 'Loading..';

// const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;




  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column' , md:'row'}}>
        <Box flex={1}>
          <Box sx={{ width:'100%' , position: 'sticky', top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
             
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
