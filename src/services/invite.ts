import request from './request';

export function sendInvitation(data: InviteRequest) {
  return request.post("/prod/fake-auth", data, {});
}
