import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/PostDropdown.module.css";
import { useHistory } from "react-router";
import { useSetCategoryContext } from "../contexts/DeptCategoryContext";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const EditDeleteIcon = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip>Edit/delete</Tooltip>}
    >
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
  </OverlayTrigger>
));

const DepartmentIcon = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip>Scene Posts by Category</Tooltip>}
    >
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
  </OverlayTrigger>
));

const EditProfileIcon = React.forwardRef(({ onClick }, ref) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip>Edit Profile/Change Username or Password</Tooltip>}
    >
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
  </OverlayTrigger>
));

export const PostDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={EditDeleteIcon} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={EditProfileIcon} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

// department dropdown 
export function DeptDropdown({ handleClick, depart}) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={DepartmentIcon} />
      <Dropdown.Menu>
        {depart ? (
          <Dropdown.Item
          onClick={() => handleClick('requirements') }
          aria-label="select requirements"
        >
          <i className="fas fa-play" /> Requirements  <br/>ordered by scene
        </Dropdown.Item>
        ) : (
          <Dropdown.Item
          onClick={() => handleClick('requirements') }
          aria-label="select requirements"
        >
          <i className="fas fa-play" /> Requirements 
        </Dropdown.Item>
        ) }
        <Dropdown.Item
          onClick={() => handleClick("workspace") }
          aria-label="select workspace"
        >
          <i className="fas fa-play" /> Workspace
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("finals") }
          aria-label="select finals"
        >
          <i className="fas fa-play" /> Finals
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("shooting") }
          aria-label="select shooting"
        >
          <i className="fas fa-play" /> Shooting
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("info") }
          aria-label="select info"
        >
          <i className="fas fa-play" /> Info
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}