import Text from "../Components/Utils/Text.jsx";

const Presentation = () => {
  return (
    <div className="flexbox-col-start">
      <section className="bg-secondary-var-1 h-full px-[2rem] lg:px-[8rem] lg:py-10 py-5 w-full flexbox-col gap-4 lg:gap-7 mb-10">
        <Text title="Pour qui sont destinés ces cours ?">
          <p>
            <b>Pour tous les élèves de la maternelle à la 3ème.</b> Les troubles
            des apprentissages peuvent être un frein si l&apos;enfant n&apos;a
            pas pris l&apos;habitude de les voir comme une force ! Si votre
            enfant présente un{" "}
            <a
              className="external-link"
              href="https://corsica-dys-tdah.assoconnect.com/page/1467509-quesaco"
              target="_blank"
              rel="noreferrer"
            >
              trouble
            </a>{" "}
            nous seront là afin de le soutenir au mieux et de développer
            l&apos;ensemble de ses capacités.
          </p>
        </Text>

        <Text>
          <p className="font-bold">Si vous avez besoin de soutient afin :</p>{" "}
          <p>
            - D&apos;élaborer les différents dossiers (
            <a
              className="external-link"
              href="https://www.monparcourshandicap.gouv.fr/scolarite/ppre-pai-pap-pps-en-quoi-consistent-les-differentes-possibilites-dappui-la-scolarisation"
              target="_blank"
              rel="noreferrer"
            >
              MDPH, PPRE, PPS, PAP, etc
            </a>
            ) nous pourront également vous orienter afin de maximiser vos
            chances d&apos;avoir un avis favorable.
            <br />- D&apos;organiser une médiation avec l&apos;équipe
            pédalogique de l&apos;établissement scolaire. <br />- De trouver des
            solutions pour la vie et l&apos;organisation à la maison.
          </p>
        </Text>
      </section>
      <section className="px-[2rem] lg:px-[8rem] lg:mb-5 mb-3">
        <Text
          title="Dans quel but ? 
"
        >
          <ul>
            <li>- Apprendre à apprendre.</li>
            <li>- Découvrir son propre mode de fonctionnement.</li>
            <li>- Découvrir son véritable potentiel.</li>
            <li>- Mettre en place des stratégies.</li>
            <li>- Reprendre confiance en soi.</li>
            <li>- Retrouver la motivation.</li>
            <li>- Retrouver du plaisir à apprendre.</li>
          </ul>
        </Text>
      </section>
      <section className="bg-secondary-var-1 h-full  px-[2rem] lg:px-[8rem] lg:py-10 py-5 w-full flex flex-col gap-4 lg:gap-7">
        <Text title="Comment ?">
          <p>
            Une pédagogie conciliante ! Pratiquer la pédagogie « conciliante »,
            c&apos;est s&apos;adapter aux besoins et au rythme de l&apos;enfant.
            En définitive le but est d&apos;établir une relation de confiance
            avec les parents et l&apos;enfant, de pouvoir s&apos;adapter à son
            profil d&apos;apprentissage afin de l&apos;amener à prendre
            confiance et donc progresser. Écouter les parents et les enfants
            signifie prendre en compte leurs peurs et leurs angoisses ainsi que
            leurs difficultés.
          </p>
          <ul>
            <li>
              <p className="lg:ml-16 ml-7 mb-7">- Analyse des profils</p>
            </li>
            <li>
              <p className="lg:ml-16 ml-7">
                - Analyse des besoins et des attentes. Il s&apos;agit de
                comprendre les besoins de l&apos;enfant.
              </p>
            </li>
          </ul>
          <p>
            C&apos;est ainsi que les difficultés pourront être surmontées. En
            effet, votre enfant a sa propre manière d&apos;établir des liens
            entre les différents éléments qui lui sont transmis. Une écoute
            attentive de ses différentes théories permettra de mieux le
            comprendre et d&apos;adapter les outils d&apos;apprentissage.
          </p>
          <p>
            Ici on ne va pas vous dire que nous avons trouvé <b>LA</b> méthode
            qui aidera votre enfant. En effet, vous êtes sans aucun doute bien
            placé pour savoir que tout individu est unique, ainsi toute méthode
            lui convenant sera unique.
          </p>
          <p>
            À mesure des rencontres avec votre enfant un lien fort sera créé,
            cela permettra d&apos;avoir un échange sans limite avec lui et de
            travailler ensemble pour lui donner les outils qui l&apos;aideront.
          </p>
          <p>
            <b>
              Nous avons bien entendu des bases pédagogiques, voici quelques
              exemples :
            </b>
          </p>
          <ul>
            <li>
              <p className="lg:ml-16 ml-7 mb-7">
                -Besoin de bouger, de toucher = <b>Méthode montessori</b>
              </p>
            </li>
            <li>
              <p className="lg:ml-16 ml-7">
                -Manque de confiance = <b>Pédagogie Freinet</b>
              </p>
            </li>
            <li>
              <p>
                Elle laisse les enfants émettre leurs propres hypothèses, faire
                leurs propres découvertes et éventuellement constater et
                admettre leurs échecs tout en parvenant à de belles réussites.
              </p>
            </li>
          </ul>
          <p>
            <span className="lg:ml-16 ml-7">
              -Manque d&apos;investissement scolaire, Fatigue, impression de ne
              pas être à la hauteur (et nous savons à quel point il y en a ...)
              =<b> Méthode Decroly</b>
            </span>
            <br />
            Pédagogie active. Cette méthode est en rapport direct avec les
            besoins de l&apos;enfant, qui se traduisent dans ses centres
            d&apos;intérêt (médecine, végétaux, super-héros, légo ®, chevaux,
            etc.).
          </p>
        </Text>
      </section>
    </div>
  );
};

export default Presentation;
