import { faker } from '@faker-js/faker'

export function showPetByIdPathParams(data?: Partial<ShowPetByIdPathParams>): ShowPetByIdPathParams {
  return {
    ...{ petId: faker.string.alpha(), testId: faker.string.alpha() },
    ...(data || {}),
  }
}

/**
 * @description Expected response to a valid request
 */
export function showPetById200() {
  return pet()
}

/**
 * @description unexpected error
 */
export function showPetByIdError() {
  return error()
}

export function showPetByIdQueryResponse(data?: Partial<ShowPetByIdQueryResponse>): ShowPetByIdQueryResponse {
  return data || faker.helpers.arrayElement<any>([showPetById200()])
}
