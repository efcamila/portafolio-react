import Title from "./components/titles/Title";
import CopyButton from "./components/buttons/CopyButton";
import "./App.css";
import DownloadButton from "./components/buttons/DownloadButton";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UnderLine,
  Image,
} from "./components/cards/Card";

function App() {
  return (
    <>
      <div className="container container-sm gap-20">
        <article className="flex-row mt-60">
          <div className="col-12">
            <Title className="title-center title-1 title-bd col">
              <h1 className="mb-5">Hola, soy</h1>
              <h1 className="mt-5">
                <span className="bg-dark">
                  Camila Efler
                </span>
              </h1>
            </Title>
          </div>
        </article>

        <article className="flex-row mt-40">
          <div className="col-12">
            <Card cardColor="card-transparent">
              <CardBody>
                <p>
                  Me dedico al desarrollo web frontend porque me gusta diseñar interfaces funcionales y 
                  visualmente atractivas.
                </p>
              </CardBody>
            </Card>
          </div>
        </article>

        <div className="flex-row gap-10">
          <CopyButton />
        </div>

        <div className="flex-row center">
          <DownloadButton srcFile="./cv_eflercamila.pdf" />
        </div>

        <div className="flex-row mt-40">
          <Title className="title-4 mb-5 col">
            <h3 className="mb-10">Habilidades</h3>
          </Title>
          <Card cardColor="card-light-transparent pd-10">
            <CardBody>
              <div className="flex-row gap-10">
                <div className="col center">
                  <Image
                    src="./html.svg"
                    alt="HTML logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col center">
                  <Image
                    src="./css.svg"
                    alt="css logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col center">
                  <Image
                    src="./javascript.svg"
                    alt="javascript logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col center">
                  <Image
                    src="./php.svg"
                    alt="php logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col center">
                  <Image
                    src="./java.png"
                    alt="java logo"
                    width={40}
                    height={50}
                  />
                </div>
                <div className="col center">
                  <Image
                    src="./react.svg"
                    alt="React logo"
                    width={50}
                    height={50}
                    />
                </div>
                <div className="col center">
                  <Image
                    src="./git.svg"
                    alt="git logo"
                    width={50}
                    height={50}
                    />
                </div>
                <div className="col center">
                  <Image
                    src="./github.svg"
                    alt="github logo"
                    width={50}
                    height={50}
                    />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="flex-row mt-40 mb-40">
          <Title className="title-4 mb-10 col">
            <h3>Proyectos</h3>
          </Title>
          <Card cardColor="card-dark-transparent">
            <CardBody>
              <div className="container-image">
                <a href="https://lafusaweb.000webhostapp.com/">
                  <Image
                    src="./lafusa.png"
                    alt="Proyecto web La Fusa"
                    height={"100%;"}
                    width={"100%"}
                  />
                </a>
              </div>
            </CardBody>
            <UnderLine colorLine="title-grey" />
            <CardFooter className="col">
              <a
                className="link-proyecto title-grey"
                href="https://lafusaweb.000webhostapp.com/"
              >
                <h3 className="mb-10">La Fusa, 2023</h3>
              </a>

              <p className="fw-500">
                Página web realizada con CodeIgniter y Bootstrap, con
                integración de Checkout Pro de MercadoPago como proyecto final de mi
                carrera.
              </p>
              <br />
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
