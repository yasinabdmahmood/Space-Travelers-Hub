import { useSelector } from 'react-redux';
import style from './profile.module.css';

function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  return (
    <div className={style.container} data-testid="main-container">
      <div className={style.missions}>
        <h1>My Missions</h1>
        <ul className={style['rocket-list']}>
          {missions.filter((el) => el.joined).map((el) => (
            <li key={el.id} className={style['rocket-item']}>
              {el.mission_name}
            </li>
          ))}
        </ul>
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
