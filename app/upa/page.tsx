"use client";
import React from "react";
import { useForm } from "react-hook-form";

const UnitPriceCreator = () => {
  const units = [
    "acre",
    "barril",
    "bobina",
    "bote",
    "caja",
    "calle",
    "camion",
    "carretilla",
    "cm",
    "cm3",
    "dl",
    "ft",
    "ft2",
    "ft3",
    "g",
    "gal",
    "ha",
    "hp",
    "in",
    "kg",
    "kg/cm2",
    "kg/m2",
    "km",
    "kw",
    "lb",
    "lt",
    "l",
    "m",
    "m2",
    "m3",
    "m3/kg",
    "mg",
    "mi",
    "ml",
    "mm",
    "mz",
    "oz",
    "pt",
    "paz",
    "qm",
    "rollo",
    "saco",
    "t",
    "tambo",
    "w",
    "yd",
    "yd2",
  ];

  const options = units.map((unit) => {
    return `<option value="${unit}">${unit}</option>`;
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  // console.log(watch("id")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-6 border gap-2 shadow mt-4 mx-10 rounded-xl"
    >
      <h1 className="text-lg font-bold mb-2">🧱 Material</h1>

      <hr className="" />
      <div className="flex gap-2 w-full mt-2">
        {/* Description Input */}
        <div className="flex-none">
          <label
            id="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ID Insumo
          </label>
          <div className="relative">
            <input
              type="text"
              id="id"
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="MA-01"
              {...register("id", { required: true, maxLength: 20 })}
              aria-invalid={errors.id ? "true" : "false"}
            />
            {errors.id?.type === "required" && (
              <span role="alert" className="text-xs text-rose-700 ml-2">
                Campo requerido
              </span>
            )}
          </div>
        </div>
        {/* Description Input */}
        <div className="w-full">
          <label
            id="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nombre del insumo
          </label>
          <div className="relative">
            <input
              type="text"
              id="description"
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="	
              Ladrillo cerámico hueco triple, para revestir, 33x16x11 cm, densidad 810 kg/m³."
              {...register("description", {
                required: true,
                minLength: 3,
                maxLength: 64,
              })}
              aria-invalid={errors.id ? "true" : "false"}
            />
            {errors.description?.type === "required" && (
              <span role="alert" className="text-xs text-rose-700 ml-2">
                Campo requerido
              </span>
            )}
            {errors.description?.type === "minLength" && (
              <span role="alert" className="text-xs text-rose-700 ml-2">
                Debe tener entre 3 y 64 caracteres
              </span>
            )}
            {errors.description?.type === "maxLength" && (
              <span role="alert" className="text-xs text-rose-700 ml-2">
                Debe tener entre 3 y 64 caracteres
              </span>
            )}
          </div>
        </div>
        {/* Amount Input */}
        <div className="flex-none">
          <label
            id="unit"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cantidad
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              min="0"
              id="amount"
              className="block w-28 rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="1"
              {...register("amount", { required: true })}
              aria-invalid={errors.id ? "true" : "false"}
            />
            {errors.amount?.type === "required" && (
              <span role="alert" className="text-xs text-rose-700 ml-2">
                Campo requerido
              </span>
            )}
          </div>
        </div>

        {/* Unit Input */}
        <div className="flex-none">
          <label
            id="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Unidad
          </label>
          <div className="relative">
            <select
              id="unit"
              className="block w-28 rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("unit")}
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Currency Input */}
        <div>
          <label
            id="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Valor Unitario
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="price"
              step="0.01"
              min="0"
              className="block W-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0,00"
              {...register("price", { required: true })}
              aria-invalid={errors.id ? "true" : "false"}
            />
            <div className="flex-none absolute inset-y-0 right-0 flex items-center">
              <label id="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                {...register("currency")}
              >
                <option>COP</option>
                <option>MXN</option>
                <option>USD</option>
              </select>
            </div>
          </div>
          {errors.price?.type === "required" && (
            <span role="alert" className="text-xs text-rose-700 ml-2">
              Campo requerido
            </span>
          )}
        </div>
      </div>

      {/* <------ Next Row -----> */}

      <div className="flex gap-2 w-full mt-4">
        {/* Provider Input */}
        <div className="flex-none">
          <label
            id="provider"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Proveedor
          </label>
          <div className="relative">
            <input
              type="text"
              id="provider"
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ladrillera B-Buildr"
              {...register("provider")}
            />
          </div>
        </div>
        {/* Reference Input */}
        <div className="w-full">
          <label
            id="reference"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            No. Referencia
          </label>
          <div className="relative">
            <input
              type="text"
              id="reference"
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="LH3-010120231337"
              {...register("reference")}
            />
          </div>
        </div>
        {/* Date Input */}
        <div className="flex-none">
          <label
            id="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Fecha
          </label>
          <div className="relative">
            <input
              type="date"
              id="date"
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("date")}
            />
          </div>
        </div>

        {/* Reminder Input */}
        <div className="flex-none">
          <label
            id="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Te recordamos actualizar Valor Unitario?
          </label>
          <div className="relative">
            <select
              id="reminder"
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("reminder")}
            >
              <option>No</option>
              <option>Si, cada mes</option>
              <option>Si, cada 6 meses</option>
              <option>Si, cada ano</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-4 justify-end gap-2">
        <button
          type="submit"
          className="shadow-sm rounded-full border bg-indigo-600 px-6 py-2.5 text-white"
        >
          Crear insumo
        </button>
      </div>
    </form>
  );
};

export default UnitPriceCreator;
