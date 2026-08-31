import { createContext, useContext, useState } from "react";
import { jobs as initialJobs } from "../data/mockData";

const SavedJobsContext = createContext();

export function SavedJobsProvider({ children }) {
  const [savedIds, setSavedIds] = useState([2, 5]);

  const toggle = (id) => {
    setSavedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const isSaved = (id) => savedIds.includes(id);

  return (
    <SavedJobsContext.Provider value={{ savedIds, toggle, isSaved }}>
      {children}
    </SavedJobsContext.Provider>
  );
}

export const useSaved = () => useContext(SavedJobsContext);