

const Listaitems = ({ productos }) => {

    return (
        <section className="conteiner m-auto mt-4">
            <h2 className="text-4xl font-semibold">Platos y postres</h2>
            <hr />
            <div className="flex flex-grap justify-center gap-6 items-center">
                {productos.map((item) => (
                    <article key={item.id}>
                        <img src={item.img} alt={item.nombre} />
                        <h3 className='text-2xl font-semibold'>{item.producto}</h3>
                        <hr />
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                    </article>
                ))}
            </div>

        </section>


    )

}
export default Listaitems;

