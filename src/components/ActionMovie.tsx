const ActionMovie = ({ classData, moviesData }) => {

    const actionClass = classData?.class?.[5]

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{actionClass.type_name}</h2>
            <div className="flex flex-wrap gap-4">
                {moviesData.list?.map((item) => (
                    <img
                        key={item.vod_id}
                        src={item.vod_pic}
                        alt={item.vod_name}
                        className="w-[200px] h-[280px] object-cover rounded-lg"
                    />
                ))}
            </div>
        </section>
    )
}

export default ActionMovie

