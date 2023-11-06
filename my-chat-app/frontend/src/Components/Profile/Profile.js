import React from 'react';
import './Profile.css';
import { Grid } from '@mui/material';
import profile1 from '../../images/pp1.jpg';

function Profile({followersList,followingList}) {
    

  return (
    <div className='profile_container'>
        <div className='profile_img_name'>
            <div>
                <img className='profile_pic' src={profile1}></img>
            </div>
            <div>Aravind</div>
            <div>@aravind_beast</div>
        </div>
        <div className='profile_follows'>
            <Grid container className='grid_follows'>
                <Grid item xs={4} style={{marginRight: "30px"}}>
                    <div>Followers</div>
                    <div>
                        {
                            followersList.map(followers => (
                                // <li key={followers.id}>{followers.username}</li>
                                <div className='follow_content'>                                   
                                    <img className='follow_pic' src={profile1} width="50px" style={{borderRadius: "50%"}}></img>
                                    <div className='follow_username'>{followers.username}</div>
                                    
                                        <button className='follow_button'>Remove</button>
                                        {/* <button>Accept</button> */}
                                    
                                </div>   
                            )
                        )}   
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>Following</div>
                    <div>
                        {
                            followingList.map(following => (
                                // <li key={following.id}>{following.username}</li>
                                <div className='follow_content'>                                   
                                    <img className='follow_pic' src={profile1} width="50px" style={{borderRadius: "50%"}}></img>
                                    <div className='follow_username'>{following.username}</div>
                                    <button className='follow_button'>Following</button>
                                </div>  
                            )
                            
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Profile