import { useLoaderData, useNavigation, defer } from "react-router-dom";
import { loadPersonData, loadPersonMedia } from "../router/loaders/loader-data";
import PersonDetails from "../components/Person/PersonDetails";
import PersonMedia from "../components/Person/PersonMedia";
import Loading from "../components/UI/Loaders/Loading";
//======================================================================
const PersonPage = () => {
  const { person, personMedia } = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loading />}
      <PersonDetails person={person} />
      {personMedia.length > 0 && <PersonMedia mediaList={personMedia} />}
    </>
  );
};

export default PersonPage;
//======================================================================
//* Person Details Loader
export const personDetailsLoader = async ({ params }) => {
  return defer({
    person: await loadPersonData(params),
    personMedia: await loadPersonMedia(params),
  });
};
