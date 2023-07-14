import style from "./footer.module.css";

const DefaultFooter = () => {
  return (
    <div>
      <footer className={`footer mt-auto footer-center p-4 ${style.footer}`}>
        <div>
          <p>Copyright © 2023 - All right reserved by Books Center Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default DefaultFooter;
