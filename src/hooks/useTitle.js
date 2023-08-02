const { useEffect } = require("react");

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Foodo`;
    }, [title]);
};

export default useTitle;