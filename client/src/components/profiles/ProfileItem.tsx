import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export interface IProfile {
  user: { _id: string, name: string, avatar: any };
  status: string;
  company: string;
  location: string;
  skills: string
}

const ProfileItem = ({ //use destructuring get props
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}: any) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>{status} {company && <span> at {company}</span>}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill: any, index: number) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  )
};

ProfileItem.propsType = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
