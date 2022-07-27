import { CardPhotoFrame, BandLogo } from '../components';
import { LandingCardProps } from 'types';

const LandingCard: React.FC<LandingCardProps> = (props) => {
  return (
    <section className='bg-secondary-gold w-full mt-36 pt-35 relative rounded-[20px]'>
      <div className='absolute w-3.75 h-3.75 top-3.75 left-4 rounded-full bg-gradient-radial-purple' />
      <div className='absolute w-3.75 h-3.75 top-3.75 right-4 rounded-full bg-gradient-radial-purple' />
      <CardPhotoFrame>
        <BandLogo className='scale-150' />
      </CardPhotoFrame>
      <div
        id='landing-card-div'
        className='h-92 mt-9 mb-10 mr-8 ml-4 px-12 overflow-y-auto'
      >
        <article className='text-lg font-arial'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            repudiandae exercitationem natus veritatis, fugiat amet vel
            accusantium officia accusamus hic corrupti dolorum deleniti
            laudantium suscipit sunt doloremque temporibus quos iusto.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            architecto alias cupiditate placeat doloremque similique sed et
            ullam ducimus! Fugiat accusamus esse facere magnam praesentium hic
            at ducimus impedit nisi.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            temporibus quam nostrum, reiciendis porro aperiam minima. Iure vel
            voluptatem cupiditate voluptates. Veniam voluptatum magni odit!
            Consequatur totam accusantium distinctio maiores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
            a ullam minima inventore! Odio temporibus quos odit, recusandae
            facere, dolor hic enim ratione rerum, quidem quibusdam minima.
            Cupiditate, repellendus!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            aperiam eius corrupti eum deleniti necessitatibus porro similique
            sunt soluta culpa! Cupiditate dolores sequi repellendus incidunt
            obcaecati et officiis, molestiae ipsum.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            molestias. Ratione quas nam saepe fugiat laboriosam ipsum rerum
            tempore veniam? Assumenda voluptates quasi voluptatum labore cumque
            eaque. Excepturi, nobis error.
          </p>
        </article>
      </div>
    </section>
  );
};

export default LandingCard;
