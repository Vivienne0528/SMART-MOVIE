import Link from "next/link";
const ActionMovie = ({ data, actionData, comedyData }) => {
  return (
    <section className="flex flex-col gap-4">
      {/* {classData.map((cls) => (
        <h2 className="text-xl font-semibold">{cls.type_name}</h2>

      ))} */}
      <h2 className="text-xl font-semibold">{data.class?.[5].type_name}</h2>
      <div className="flex flex-wrap gap-4">
        {actionData.list?.map((item) => (
          <Link
            key={item.vod_id}
            href={{
              pathname: `/movies/${item.vod_id}`,
            }}
          >
            <img
              src={item.vod_pic}
              alt={item.vod_name}
              className="w-[200px] h-[280px] object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>
      <h2 className="text-xl font-semibold">{data.class?.[6].type_name}</h2>
      <div className="flex flex-wrap gap-4">
        {comedyData.list?.map((item) => (
          <Link
            key={item.vod_id}
            href={{
              pathname: `/movies/${item.vod_id}`,
            }}
          >
            <img
              src={item.vod_pic}
              alt={item.vod_name}
              className="w-[200px] h-[280px] object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ActionMovie;
