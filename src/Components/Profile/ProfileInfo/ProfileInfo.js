import classes from './ProfileInfo.module.css';

const ProfileInfo = () => (
  <div>
    <div><img src="https://www.nastol.com.ua/pic/201803/2560x1440/nastol.com.ua-277274.jpg" alt="a" /></div>
    <div className={classes.descriptionBlock}> ava + desc</div>
  </div>
);
export default ProfileInfo;
