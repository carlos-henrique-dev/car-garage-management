import { ICar } from '../../../entities'

type Props = {
  car: ICar
}

export function CarDetails({ car }: Props) {
  if (!car) return null

  const { model, brand, registrationPlate } = car

  return <span>{`${model}/${brand.name} - ${registrationPlate}`}</span>
}
