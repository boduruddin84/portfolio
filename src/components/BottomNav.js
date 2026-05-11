

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-8 md:hidden">
      <div className="bg-surface-container/70 dark:bg-inverse-surface/70 backdrop-blur-2xl rounded-full mx-auto w-fit border border-outline-variant/30 shadow-sm flex gap-2 p-2">
        <a className="bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full p-3 active:scale-95 transition-all" href="#">
          <span className="material-symbols-outlined">home_max</span>
        </a>
        <a className="text-on-surface-variant dark:text-surface-variant p-3 hover:bg-surface-variant dark:hover:bg-on-surface-variant rounded-full transition-all" href="#">
          <span className="material-symbols-outlined">work_outline</span>
        </a>
        <a className="text-on-surface-variant dark:text-surface-variant p-3 hover:bg-surface-variant dark:hover:bg-on-surface-variant rounded-full transition-all" href="#">
          <span className="material-symbols-outlined">account_tree</span>
        </a>
        <a className="text-on-surface-variant dark:text-surface-variant p-3 hover:bg-surface-variant dark:hover:bg-on-surface-variant rounded-full transition-all" href="#">
          <span className="material-symbols-outlined">mail</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
