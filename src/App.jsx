import './App.css'
import { Header } from './components/Header';
import { ButtonLink } from './components/ButtonLink';
import { Footer } from './components/Footer';

export function App() {

  return (
    <div className="h-screen flex flex-col justify-center items-center" >
      <Header />
      <ButtonLink social="Instagram" link="https://www.instagram.com/gian_milani/"/>
      <ButtonLink social="Linkedin" link="https://br.linkedin.com/in/gian-milani-63210023b?trk=people-guest_people_search-card"/>
      <ButtonLink social="Github" link="https://github.com/Gian-Milani"/>
      <ButtonLink social="Rocketseat" link="https://app.rocketseat.com.br/me/gian-milani-06066"/>
      <Footer />
    </div>
  )
}
