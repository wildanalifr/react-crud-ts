/* eslint-disable react-refresh/only-export-components */
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IFormInput } from '../types/form'
import axiosReq from '../utils/api'
import Button from './Button'
import SelectField from './Select'
import TextField from './TextField'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { ErrorResponse } from '../types/api'
import { useBearStore } from '../store/tableStore'
import React from 'react'
// import { shallow } from 'zustand/shallow'

const ANU_OPTIONS = [
  { optionValue: '1', optionLabel: 'satu' },
  { optionValue: '2', optionLabel: 'dua' },
]

type Props = {
  isEdit?: boolean
}

export default React.memo(function Form({ isEdit = false }: Props) {
  // const { increase, tambah } = useBearStore((state) => {
  //   increase: state.increase,
  //   tambah:state.tambah,
  // })
  const { increase, tambah } = useBearStore((state) => ({
    increase: state.increase,
    tambah: state.tambah,
  }))

  console.log('halooo')

  const methods = useForm<IFormInput>({
    defaultValues: {
      title: '',
      description: '',
      price: '0',
      category: '1',
    },
  })

  const { handleSubmit, reset } = methods

  const onSubmit: SubmitHandler<IFormInput> = async (param) => {
    console.log('param', param)
    const payload = {
      title: param?.title,
      price: parseInt(param?.price),
      description: param?.description,
      categoryId: parseInt(param?.category),
      images: ['https://placeimg.com/640/480/any'],
    }
    console.log('payload', payload)
    if (isEdit) {
      console.log('tidak edit')
    } else {
      try {
        await axiosReq.post('/products', payload)
        toast.success('Sukses Simpan data!', {
          autoClose: 1000,
        })
        increase('wkwkwkwkwkwkwfjlsjfl')
        reset()
      } catch (error) {
        const err = error as ErrorResponse
        toast.error(err?.message[0], {
          autoClose: 1000,
        })
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-60 mx-auto">
        <TextField name="title" label="Title" size="sm" />
        <TextField name="price" label="Price" size="sm" />
        <TextField name="description" label="Desription" size="sm" />
        <SelectField
          name="category"
          options={ANU_OPTIONS}
          label="Kategori"
          size="sm"
        />

        <Button
          size="sm"
          title="Submit"
          type="submit"
          variant="success"
          className="mt-3"
        />
      </form>

      <button
        onClick={() => {
          const modal = document.getElementById(
            'my_modal_1'
          ) as HTMLDialogElement | null
          if (modal) {
            modal.showModal()
          }
        }}
      >
        click aja
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button type="button" onClick={() => tambah()}>
                tambah
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <ToastContainer />
    </FormProvider>
  )
})
