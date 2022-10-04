import { useSelector } from 'react-redux';
import style from './profile.module.css';

function Profile() {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className={style.container}>
      <div>
        <h1>My Missions</h1>
        <ul />
      </div>
      <div className={style.rockets}>
        <h1>My Rockets</h1>
        <ul className={style['rocket-list']}>
          {
          rockets.filter((el) => el.reserved).map((el) => (
            <li key={el.id}>
              {el.rocket_name}
            </li>
          ))
         }
        </ul>
      </div>
    </div>
  );
}

export default Profile;
