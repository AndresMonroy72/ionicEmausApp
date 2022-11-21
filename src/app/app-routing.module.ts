//el app-ruting son las rutas donde se cargan los componentes, osea lo que nos lleva a las diversas paginas.

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


//la primera ruta es la pagina places osea el lugar donde se cargar las diversas rutas de Emaus como: quienes somos, Usuarios, acerca de.

const routes: Routes = [
  { path: "", redirectTo: "places", pathMatch: "full" },
  {
    path: "places",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./places/places.module").then(m => m.PlacesPageModule)
      },
      {
        path: ":placeId",
        loadChildren: () =>
          import("./places/place-detail/place-detail.module").then(
            m => m.PlaceDetailPageModule
          )
      }
    ]
  },
  {
    path: "new-place",
    loadChildren: () =>
      import("./places/place-add/place-add.module").then(
        m => m.PlaceAddPageModule
      )
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
