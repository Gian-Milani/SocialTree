import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import rocketseat from '../assets/rocketseat.svg';

export function Footer(){
  return (
    <div className="mt-10 w-80 flex items-center justify-around">
      <a href="https://www.instagram.com/gian_milani/" className="hover:cursor-pointer hover:opacity-60"><img src={instagram} alt="Icon instagram"/></a>
      <a href="https://br.linkedin.com/in/gian-milani-63210023b?trk=people-guest_people_search-card" className="hover:cursor-pointer hover:opacity-60"><img src={linkedin} alt="Icon linkedin" /></a>
      <a href="https://github.com/Gian-Milani" className="hover:cursor-pointer hover:opacity-60"><img src={github} alt="Icon github"/></a>
      <a href="https://app.rocketseat.com.br/me/gian-milani-06066" className="hover:cursor-pointer hover:opacity-60"><img src={rocketseat} alt="Icon rocketseat"/></a>
    </div>
  )
}