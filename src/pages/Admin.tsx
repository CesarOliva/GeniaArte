import { useForm } from "react-hook-form";

const AdminPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onChange',
    })

    const onSubmit = (data: any) =>{
        console.log(data)

        reset()
    }

    return (
        <div className="w-full mt-12 flex items-center justify-center">
            <div className="w-[90%] flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-center">Inicio de Sesión</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 w-full flex flex-col gap-4 max-w-125 mx-auto"
                >
                    <div>
                        <input
                            {...register('username', {
                                required: 'Ingrese el nombre de usuario',
                                minLength: {
                                    value: 5,
                                    message: 'Minimo 5 caracteres'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Maximo 20 caracteres'
                                }
                            })}
                            className={`p-2 outline-1 rounded border focus:outline-primary w-full ${
                                errors.username ? 'border-red-500 outline-red-500 focus:outline-red-500'
                                : ''
                            }`}
                            autoComplete="usernames"
                            name="username" 
                            type="text"
                            placeholder="Nombre de usuario"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            {...register('password', {
                                required: 'Ingrese la contraseña',
                                minLength: {
                                    value: 7,
                                    message: 'Minimo 7 caracteres'
                                },
                                maxLength: {
                                    value: 64,
                                    message: 'Maximo 64 caracteres'
                                }
                            })}
                            className={`p-2 outline-1 rounded border focus:outline-primary w-full ${
                                errors.password ? 'border-red-500 outline-red-500 focus:outline-red-500'
                                : ''
                            }`}
                            autoComplete="current-password"
                            type="password"
                            placeholder="Contraseña"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button className="bg-black py-2 text-white font-semibold rounded cursor-pointer" type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}
 
export default AdminPage;