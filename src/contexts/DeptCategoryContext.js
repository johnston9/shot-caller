import { createContext, useContext,  useState } from "react";
import { useHistory } from "react-router";

export const SceneContext = createContext();
export const SetSceneContext = createContext();
export const useSceneContext = () => useContext(SceneContext);
export const useSetSceneContext = () => useContext(SetSceneContext);

export const DeptContext = createContext();
export const SetDeptContext = createContext();
export const useDeptContext = () => useContext(DeptContext);
export const useSetDeptContext = () => useContext(SetDeptContext);

export const CategoryContext = createContext();
export const SetCategoryContext = createContext();
export const useCategoryContext = () => useContext(CategoryContext);
export const useSetCategoryContext = () => useContext(SetCategoryContext);

export const DeptCategoryProvider = ({ children }) => {
  const [sceneId, setSceneId] = useState("");
  const [dept, setDept] = useState("");
  const [category, setCategory] = useState("");
  const history = useHistory();

  return (
    <SceneContext.Provider value={sceneId}>
      <SetSceneContext.Provider value={setSceneId}>
        <DeptContext.Provider value={dept}>
          <SetDeptContext.Provider value={setDept}>
            <CategoryContext.Provider value={category}>
              <SetCategoryContext.Provider value={setCategory}>
                {children}
              </SetCategoryContext.Provider>
            </CategoryContext.Provider>
          </SetDeptContext.Provider>
        </DeptContext.Provider>
      </SetSceneContext.Provider>
    </SceneContext.Provider>
  );
};