// Components
import { CardGrid1 } from '@/components/ui';


export const HomeSection = ({ title = '', p = '', p2 = '', p3 = '', products =  [] }) => {
  return (
    <section>
      <div className='container'>
        <h2 className='display-5'>{ title }</h2>
        <p>
          { p }
        </p>

        {
          p2 && (
            <p>{ p2 }</p>
          )
        }
        {
          p3 && (
            <p>{ p3 }</p>
          )
        }

        <CardGrid1
          products={ products }
        />
      </div>
    </section>
  );
}
