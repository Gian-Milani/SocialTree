import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../services/api';

export function Header() {
  const [profile, setProfile] = useState('')  

  useEffect(() => {
    api.get('')
       .then(response => setProfile(response.data))
       .catch(error => console.error('Erro ao buscar dados do Github: ' + error))
  }, [])

  return (
    <div className="flex flex-col">
      <img src={profile.avatar_url} alt="Foto de perfil"  className='w-60 rounded-full border-2 border-primary p-1'/>
      <span className='text-4xl mt-6 mb-8 text-primary'>{profile.name} </span>
    </div>
  )
}