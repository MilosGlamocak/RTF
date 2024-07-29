import React, { useState, useEffect } from 'react';
import '../styles/IpGetter.css'
import {getGeoInfo} from 'findme-js';

function IpGetter() {
    const [userIp, setUserIp] = useState('');
    const [userInfo, setUserInfo] = useState({
        country: '',
        ip: '',
        isp: '',
        lat: '',
        lon: ''
    })

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setUserIp(data.ip);
                getUserLocation();
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, []);

    function getUserLocation() {
        getGeoInfo().then((res) => {
            setUserInfo({
                country: res.country,
                isp: res.isp,
                ip: res.query,
                lat: res.lat,
                lon: res.lon
            });
            console.log(res)
        })
        /*if (userIp) {
            const options = { method: 'GET' };
            fetch(`https://ipgeolocation.abstractapi.com/v1?api_key=39fccf229cda411ea44da58a9b8f95a5&ip_address=${userIp}`, options)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(error => {
                    console.log('Error fetching location:', error);
                });
        } else {
            console.log('User IP is not available yet.');
        }*/
    }

    return (
        <div className='ipGetterCont'>
            {
                userInfo.ip.length > 0 ? (
                    <>
                        <p className='geoFound'>Location found successfully</p>
                        <div className='userInfoCont'>
                            <p className='staticInfo'>IP address: </p><p> {userInfo.ip}</p>
                        </div>
                        <div className='userInfoCont'>
                            <p className='staticInfo'>Country: </p><p> {userInfo.country}</p>
                        </div>
                        <div className='userInfoCont'>
                            <p className='staticInfo'>Coordinates: </p><p>{userInfo.lat}N {userInfo.lon}E</p>
                        </div>
                    </>
                ) : (<p className='geoNotFound'>Loading location...</p>)
            }
             
        </div>
    );
}

export default IpGetter;
