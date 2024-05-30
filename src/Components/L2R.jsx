import { Box, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react'

const L2R = () => {

    return (
        <Box display="flex" flexDirection="column">
           <div className='lrcontainer'>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="black" padding="20px" paddingLeft="50px">
                    <Box bgcolor="white" padding="5px">
                        <KeyboardArrowRightIcon fontSize='large'></KeyboardArrowRightIcon>
                    </Box>
                    <Box>
                        <Typography fontSize="xx-large" fontFamily="monospace" padding="30px" color="white">
                            Interior Design
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="#E8E7E7" padding="20px" paddingLeft="50px">
                    <Box bgcolor="black" padding="5px">
                        <KeyboardArrowRightIcon fontSize='large' sx={{ color: "white" }}></KeyboardArrowRightIcon>
                    </Box>
                    <Box>
                        <Typography fontSize="xx-large" fontFamily="monospace" padding="30px">
                            Architecture
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="#cbc6c6" padding="20px" paddingLeft="50px">
                    <Box bgcolor="black" padding="5px">
                        <KeyboardArrowRightIcon fontSize='large' sx={{ color: "white" }}></KeyboardArrowRightIcon>
                    </Box>
                    <Box>
                        <Typography fontSize="xx-large" fontFamily="monospace" padding="30px">
                            Landscape
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" bgcolor="#bdb5b5" padding="20px" paddingLeft="50px">
                    <Box bgcolor="black" padding="5px">
                        <KeyboardArrowRightIcon fontSize='large' sx={{ color: "white" }}></KeyboardArrowRightIcon>
                    </Box>
                    <Box>
                        <Typography fontSize="xx-large" fontFamily="monospace" padding="30px">
                            Automation
                        </Typography>
                    </Box>
                </Box>


                </div>
        </Box>






    )
}

export default L2R