import Layout from "../layout/layout";
import Image from 'next/image';
import styles from '../styles/about.module.css'
const About = () => {
  return (
    <Layout title="Nosotros">
      <main>
        <h1 className="heading">Nosotros</h1>
        <div className={styles.grid}>
            <Image alt="imagen sobre nosotros" src="/img/nosotros.jpeg" width={600} height={800} />
            <div className={styles.description}>
                <p>
                    vehicula purus. Integer vel sem justo. Pellentesque congue urna eu
                    convallis mollis. Suspendisse ut cursus lacus. Sed sagittis est
                    quam, ac euismod eros maximus non. Ut gravida ornare tempus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    sagittis urna quam, consequat fermentum ligula consequat nec. Proin
                    congue feugiat nisl quis venenatis. Quisque lobortis lectus eget
                    nunc sollicitudin, ut iaculis urna dapibus. Duis malesuada semper
                    odio. Mauris sed elit lobortis, sollicitudin ante at, vulputate
                    neque. Donec commodo ex non pellentesque lacinia. Vestibulum
                    ultricies urna est, non sagittis eros dapibus eget. Donec venenatis
                    rutrum sagittis. Praesent maximus at tortor quis pulvinar. Curabitur
                    convallis dictum augue, at condimentum leo consequat eu. Donec
                    pretium accumsan nunc, vel porttitor risus mattis quis. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Cras lobortis non
                    risus eget luctus. Cras imperdiet, quam ac egestas aliquam, tellus
                    velit condimentum ex, eget ullamcorper massa eros nec ante.
                    Curabitur euismod lacus ut nibh ornare, tempus viverra ligula
                    pretium. In a orci dolor. Aliquam fermentum sapien sed purus sodales
                    feugiat. Curabitur aliquam eu nisl nec tincidunt. Nunc accumsan
                    augue non mattis sollicitudin. Praesent eu orci et eros placerat
                    volutpat. Quisque in fringilla elit, quis vulputate augue. Phasellus
                    auctor velit non augue ornare, eu convallis magna faucibus. Duis
                    vestibulum nisl non sapien aliquam, ac tempus nulla imperdiet. Ut
                    ultricies condimentum ante, laoreet commodo mi. Proin ut urna vel
                    ipsum vehicula dapibus. Vivamus rhoncus hendrerit ligula, vel
                    rhoncus sem. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Morbi quis diam quis magna porttitor
                    vulputate non et felis.
                </p>
            </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
