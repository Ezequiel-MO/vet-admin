const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleEliminarPaciente = () => {
    const respuesta = confirm("Deseas eliminar este paciente ?");
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre :{""}
        <span className="font-normal normal-case ml-2">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario :{""}
        <span className="font-normal normal-case ml-2">
          {paciente.propietario}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email :{""}
        <span className="font-normal normal-case ml-2">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta :{""}
        <span className="font-normal normal-case ml-2">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas :{""}
        <span className="font-normal normal-case ml-2">
          {paciente.sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setPaciente(paciente)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white fonrt-bold uppercase rounded-lg"
          type="button"
        >
          Editar
        </button>
        <button
          onClick={handleEliminarPaciente}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white fonrt-bold uppercase rounded-lg"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;