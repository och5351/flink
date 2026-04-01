/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type RescalesHistories = RescalesHistory[];

export interface RescalesHistory {
  rescaleUuid: string;
  resourceRequirementsUuid: string;
  rescaleAttemptId: number;
  vertices: object;
  slots: object;
  schedulerStates: unknown[];
  startTimestampInMillis: number;
  endTimestampInMillis: number;
  terminalState: string;
  triggerCause: string;
  terminatedReason: string;
  expand?: boolean;
}

export interface RescalesDetailHistory {
  rescaleUuid: string;
  resourceRequirementsUuid: string;
  rescaleAttemptId: number;
  vertices: { [vertexId: string]: RescaleVertex };
  slots: { [slotSharingGroupId: string]: RescaleSlot };
  schedulerStates: SchedulerState[];
  startTimestampInMillis: number;
  endTimestampInMillis: number;
  terminalState: string;
  triggerCause: string;
  terminatedReason: string;
}

export interface RescaleVertex {
  jobVertexId: string;
  jobVertexName: string;
  slotSharingGroupId: string;
  slotSharingGroupName: string;
  desiredParallelism: number;
  sufficientParallelism: number;
  preRescaleParallelism: number;
  postRescaleParallelism: number;
}

export interface RescaleSlot {
  slotSharingGroupId: string;
  slotSharingGroupName: string;
  requestResourceProfile: ResourceProfile;
  desiredSlots: number;
  minimalRequiredSlots: number;
  preRescaleSlots: number;
  postRescaleSlots: number;
  acquiredResourceProfile: ResourceProfile;
}

export interface ResourceProfile {
  cpuCores: number;
  taskHeapMemory: number;
  taskOffHeapMemory: number;
  managedMemory: number;
  networkMemory: number;
  extendedResources: { [key: string]: unknown };
}

export interface SchedulerState {
  state: string;
  enterTimestampInMillis: number;
  leaveTimestampInMillis: number;
  durationInMillis: number;
  stringifiedException: string;
}

export interface RescalesConfig {
  rescaleHistoryMax: number;
  schedulerExecutionMode: string;
  submissionResourceWaitTimeoutInMillis: number;
  submissionResourceStabilizationTimeoutInMillis: number;
  slotIdleTimeoutInMillis: number;
  executingCooldownTimeoutInMillis: number;
  executingResourceStabilizationTimeoutInMillis: number;
  maximumDelayForTriggeringRescaleInMillis: number;
  rescaleOnFailedCheckpointCount: number;
}
