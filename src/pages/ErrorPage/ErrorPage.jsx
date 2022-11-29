import React from 'react'
import './ErrorPage.css'

const sendDataToReactNativeApp = async () => {
    window.ReactNativeWebView.postMessage(null);
};

export const ErrorPage = () => {
    return (
    <div className='error'>
        <div className='error__text'>
        Доступ запрещен!
        </div>
    </div>
    )
}