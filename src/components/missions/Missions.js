import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleJoining } from '../../redux/Missions/missionsReducer';
import style from './missions.module.css';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  return (
    <>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.header}>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        {missions.map((el) => (
          <tbody key={el.id} className={style.item}>
            <td className={style.row}>{el.mission_name}</td>
            <p className={style.description}>{el.description}</p>
            <td>
              <button type="submit" className={el.joined ? style.inactiveMember : style.activeMember}>
                {
                el.joined ? 'NOT A MEMBER' : 'Active Member'
              }
              </button>
            </td>
            <td>
              <button type="submit" onClick={() => dispatch(toggleJoining(el.id))} className={el.joined ? style.leave : style.join}>
                { el.joined ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Missions;
