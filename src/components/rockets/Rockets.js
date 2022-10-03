import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, toggleReservation } from '../../redux/rockets/rocketReducer';
import style from './rockets.module.css';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <div className={style.container}>

      {rockets.map((el) => (
        <div key={el.id} className={style.item}>
          <img src={el.flickr_images} alt="Rocket image" />
          <div className={style.info}>
            <h1>{el.rocket_name}</h1>
            <p>{el.description}</p>
            <button
              type="submit"
              onClick={() => dispatch(toggleReservation(el.id))}
              className={el.reserved ? style.cancel : style.myButton}
            >
              {el.reserved ? 'Cancel Reservation' : 'Reserve Rocket' }
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Rockets;
