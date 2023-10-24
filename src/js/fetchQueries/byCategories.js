import { ApiService } from '../fetchAPI';
import * as storage from '../storageLogic';
import * as key from '../const';


window.addEventListener("load", async () => {
    let results = await ApiService.getCategories();
    storage.saveToLocal(key.CATEGOREIS, results);
    arrCategories = storage.loadFromLocal(key.CATEGOREIS);
    categoriesOnPageLoad();
    console.log(results);
})