import { projects } from "../../helpers/data";
import { Badge, Modal, Card, Button, Spinner } from "flowbite-react";
import "./projects.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [listaProyectos, setListaProyectos] = useState([]);
  const url = "https://andidev.somee.com";
  

  const llenarDatos = () => {
    setListaProyectos([...projects]);
  };

  const obtenerDatos = async () => {
    try {
      const res = await fetch(url+"/api/Proyecto/Lista");
      const data = await res.json();
      setListaProyectos([...data.response]);
    } catch (error) {
      console.error("Error al obtener los datos: ", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const Error = () => {
    return (
      <div className=" max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center h-[700px] ">
        <h1 className="text-white text-3xl ">No hay proyectos disponibles</h1>
      </div>
    );
  };

  if (listaProyectos.length === 0) {
    return (
      <div className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center h-[700px] animate-fade-down animate-once animate-ease-out">
        <Spinner aria-label="Extra large spinner example" size="xl" color="success" />
        <h1 className="text-white text-3xl ">Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-20 animate-fade-down animate-once animate-ease-out">
      <h3 className="text-slate-200 text-center items-center justify-center w-full text-4xl">
        Proyectos
      </h3>
      <span className="text-slate-200 text-center items-center justify-center w-full ">
        Integrando conocimientos y habilidades
      </span>
      <div className="grid m-2 gap-5 gap-y-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-20 pt-10">
        {listaProyectos.map((p) => {
          return (
            <Card
              key={p.id}
              className="max-w-sm transition hover:shadow-md hover:shadow-red-500"
              renderImage={() => (
                <img
                  width={400}
                  height={200}
                  src="https://static.vecteezy.com/system/resources/thumbnails/012/012/758/small/black-and-white-pattern-abstract-texture-abstract-background-design-illustration-vector.jpg"
                  alt="image 1"
                />
              )}
            >
              <div className="flex flex-row items-center">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {p.nombre}
                </h5>
                <Badge color="warning" className="m-1">
                  {p.version}
                </Badge>
              </div>

              <p className="font-normal text-gray-700 dark:text-gray-400">
                {p.descripcion}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tecnologia.map((tec) => (
                  <Badge
                    color="success"
                    className="hover:animate-pulse hover:animate-infinite"
                    key={tec.id}
                  >
                    {tec.descripcion}
                  </Badge>
                ))}
              </div>
              <Button
                outline
                gradientDuoTone="greenToBlue"
                onClick={() => setOpenModal(true)}
              >
                vamos!
              </Button>

              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Aviso</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Actualmente está en mantenimiento, mil disculpas
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal(false)}>Aceptar</Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Cancelar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
