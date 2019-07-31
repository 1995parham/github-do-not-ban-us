/**
 *
 *  @filename    index.js
 *  @description print "GitHub is for everyone"
 *  @author      wkddngus5(Jang Woohyun) 🇰🇷
 * 
 */

const message: String = 'GitHub is for everyone';

const printMessage = ({ message } : { message: String }): void => {
    console.log( message );
}

printMessage({ message });
