import Head from "next/head";
import Image from "next/image";

import ListPlatforms from "../components/podcast/ListPlatforms";
import EpisodesWidget from "../components/podcast/EpisodesWidget";

type IndexProps = {};

export default function Home({}: IndexProps) {
  return (
    <>
      <Head>
        <title>Dokázali, že SA TO DÁ. - Svet podľa Gabiky</title>
        <meta
          name="description"
          content="Prinášam rozhovory s ľuďmi, ktorí neDÁ SA nemajú v slovníku.   Vypočuj si aj ty ich príbehy a presvedč sa o tom, že SA TO DÁ."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container py-12 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-left justify-center order-last md:order-first">
            <h1 className="text-h1 mb-5">
              Dokázali,
              <br /> že SA TO DÁ.
            </h1>
            <p className="text-2xl md:text-3xl font-light leading-40 mb-12">
              Rozhovory s ľuďmi, ktorí dokázali nemožné. Inšpirujte sa ako na
              to.
            </p>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-12 self-start text-xl">
              <a
                href="#aktualny"
                className="block py-6 px-12 bg-red text-white rounded text-medium"
              >
                Vypočuť najnovší diel
              </a>
              <a
                href="#epizody"
                className="block py-6 px-12 bg-dark-blue-800 text-white rounded text-medium"
              >
                Všetky epizódy
              </a>
            </div>
            <ListPlatforms />
          </div>
          <div className="hidden md:block pl-20">
            <Image
              src="/images/cover-photo.jpg"
              alt="Logo Dasato Svet podla Gabiky"
              width={533}
              height={658}
            />
          </div>
        </div>

        <div id="o-projekte" className="grid grid-col-1 md:grid-cols-2 mt-28">
          <div>
            <Image
              src="/images/dasato-projekt-dievca.jpg"
              alt=""
              width={573}
              height={457}
            />
          </div>
          <div className="md:pl-20 flex flex-col justify-center">
            <h2 className="text-h2 mt-6 md:mt-0">O relácii</h2>
            <p className="my-6">
              V podcaste (sú dostupné aj ako videá) prinášam rozhovory s ľuďmi,
              ktorí neDÁ SA nemajú v slovníku. Posúvajú svoje hranice a menia
              svet na lepšie miesto. Prekážky sú pre nich výzvou a cesta je
              cieľ. Vypočuj si aj ty ich príbehy a presvedč sa o tom, že SA TO
              DÁ.
            </p>
            <p className="mb-6">
              Mojím cieľom je inšpirovať ľudí, aby prekonali svoje strachy
              a plnili si svoje sny. V relácii prinášam praktické návody na
              riešenia, ako SA TO DÁ, vrátane témy financií a ich získavania.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green">
        <div className="container py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="text-h2 text-white mb-12 md:mb-0">
              20 rozhovorov
              <br />
              ročne
            </div>
            <div className="text-h2 text-white mb-12 md:mb-0">
              Významní
              <br />
              hostia
            </div>
            <div className="text-h2 text-white">
              Inšpiratívne
              <br />
              príbehy
            </div>
          </div>
        </div>
        <Image
          src={`/images/highlights.svg`}
          width={1542}
          height={70}
          className="mx-auto w-full"
          alt=""
          layout="responsive"
        />
      </div>
      <div className="container py-20">
        <div className="md:w-2/3">
          <h2 className="text-h2">Hostia, ktorých ti predstavím</h2>
          <p className="mt-6 mb-12">
            Nahliadam do života zaujímavých ľudí najmä z neziskových -
            pomáhajúcich organizácií, ale aj inšpiratívnych jednotlivcov mimo
            nezisku, aktivistov, dobrodruhov, ale aj obyčajných ľudí
            s neobyčajným príbehom.
          </p>
          <h2 className="text-h2">Pre koho je podcast?</h2>
          <p className="mt-6">
            Ľudia, ktorí majú záujem o inšpiratívne a pozitívne príbehy, iné ako
            prinášajú tradičné médiá – v DÁSATO neprinášam príbehy slávnych,
            bohatých, či úspešných v biznise, predstavujem skôr menej známych
            ale o to viac výnimočných svojim príbehom zmeny svojho malého sveta
            na o niečo lepšie miesto na život.
          </p>
          <p className="mt-6 mb-12">
            Relácia je tiež pre každého kto nepozná prácu neziskových
            organizácií a zaujíma sa o ich financovanie.
          </p>
          <h2 className="text-h2">Prečo DÁSATO?</h2>
          <p className="mt-6">
            Reláciu DÁSATO som sa rozhodla tvoriť svojpomocne, lebo sa mi zdá,
            že zbytočne prepadáme skepse a nedôvere a pritom stále je mnoho
            krásneho okolo nás, mnoho skvelých ľudí a najmä – veľa dobra v nich
            a je dôležité o tom vedieť.
          </p>
          <p className="mt-6">
            Za moju 20 ročnú prax vo finančnej sfére (v oblasti nezisku) som
            spoznala mnohých ľudí, ktorí skvelými nápadmi a svojou húževnatosťou
            menia svet k lepšiemu. Rozhodla som sa nenechať si ich inšpiratívne
            príbehy pre seba a šíriť ich ďalej.
          </p>
          <p className="mt-6 mb-12">
            Odmenou mi je pozitívna spätná väzba o tom, ako poslucháčov nabádajú
            k realizácií svojich vlastných malých – veľkých myšlienok a dokazujú
            sami sebe a spoločnosti, že SA TO DÁ.
          </p>
          <div className="hidden md:block">
            <h2 className="text-h2">Kde všade si DÁSATO vypočujete?</h2>
            <ListPlatforms />
          </div>
        </div>

        <div id="o-gabike" className="grid md:grid-cols-2 mt-28">
          <div className="flex flex-col justify-center">
            <Image
              src="/images/gabika-DASATO.jpg"
              alt=""
              width={533}
              height={658}
              layout="responsive"
            />
          </div>
          <div className="mt-6 md:mt-0 md:pl-20">
            <h2 className="text-h2">O Gabike Zúbrikovej</h2>
            <p className="my-6">
              Viac ako 20 rokov pracujem ako finančníčka vo svete nezisku.
              Poznám ľudí z pomáhajúceho sektora a poznám výsledky práce mnohých
              aktivistov a výnimočných ľudí pôsobiacich aj mimo neziskových
              organizácií. Vidím, že sa veci dajú a&nbsp;chcem toto poznanie
              priniesť aj vám. V&nbsp;relácii sa venujem aj praktickým návodom,
              ako sa veci dali do pohybu. A to vrátane financovania
              a&nbsp;otázok spojených s financiami a&nbsp;ich získaním.
            </p>
            <p className="mb-6">
              Aktuálne pracujem ako finančná riaditeľka pre IPčko (psychologická
              poradňa) a finančná riaditeľka pre Nadáciu pre deti Slovenska,
              tiež zodpovedám za financie Nadácie Tesco. Nazrela som aj do
              firemného sveta, rok som robila v IT start-upe, bolo to veľmi
              osviežujúce.
            </p>
            <p className="mb-6">
              Profesionálne sa venujem finančnému riadeniu. Viem manažovať
              financie neziskovej organizácie a niesť zodpovednosť za splnenie
              všetkých legislatívnych povinností. Poznám výzvy a riešenia pre
              manažment neziskových organizácií, orientujem sa vo fundraisingu a
              mám mnohoročné skúsenosti z oblasti manažmentu neziskoviek. Svoje
              skúsenosti odovzdávam v&nbsp;súčasnosti ďalej aj ako konzultant.
            </p>
            <p>
              Chcem inšpirovať a učiť ľudí. Odovzdať čo viem, vysvetliť, aby
              tomu rozumeli aj iní. Aj vo financiách aj v manažmente
              neziskoviek, aj v pozitívnom pohľade na svet. Rada by som medzi
              ľuďmi šírila hodnotný a inšpiratívny obsah. Aby sme videli, že sa
              veci dajú a pridali sa svojimi aktivitami tam, kde nás to baví.
            </p>

            <h3 className="text-h3 mt-6">Rozhovory</h3>
            <a href="https://dennikn.sk/1696974/gabika-zubrikova-chcete-sa-citit-stastni-pomahajte-inym/">
              <div className="flex flex-row items-center space-x-4">
                <Image
                  src="/images/DennikN.png"
                  alt=""
                  width={68}
                  height={68}
                />
                <p className="font-bold text-2x-l">
                  Gabika Zúbriková: Chcete sa cítiť šťastní? Pomáhajte iným
                </p>
                <div className="relative">
                  <Image
                    src="/images/chevron.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        <EpisodesWidget />
      </div>
    </>
  );
}
