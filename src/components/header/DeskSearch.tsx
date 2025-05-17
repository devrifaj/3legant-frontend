import Modal from "../ui/Modal";
import Search from "./Search";

type DeskSearchProps = {
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
};

const DeskSearch = ({ isSearchOpen, setSearchOpen }: DeskSearchProps) => {
  return (
    <Modal
      isOpen={isSearchOpen}
      onClose={() => setSearchOpen(false)}
      position="top"
    >
      <div className="wrapper">
        <div className="3xl:max-w-[680px] xl:max-w-[540px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] mx-auto">
          <Search />
        </div>
      </div>
    </Modal>
  );
};

export default DeskSearch;
